const express = require('express')
const session = require('express-session')
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const app = express()
const port = 3001

const db = require('./lib/db');
const sessionOption = require('./lib/sessionOption');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var MySQLStore = require('express-mysql-session')(session);
var sessionStore = new MySQLStore(sessionOption);
app.use(session({  
	key: 'session_cookie_name',
    secret: '~',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}))

app.get('/', (req, res) => {    
    req.sendFile(path.join(__dirname, '/build/index.html'));
})

app.get('/authcheck', (req, res) => {      
    const sendData = { isLogin: "" };
    if (req.session.is_logined) {
        sendData.isLogin = "True"
    } else {
        sendData.isLogin = "False"
    }
    res.send(sendData);
})

app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});

app.post("/login", (req, res) => { // 데이터 받아서 결과 전송
    const username = req.body.userId;
    const password = req.body.userPassword;
    const sendData = { isLogin: "" };

    

    if (username && password) {             // id와 pw가 입력되었는지 확인
        db.query('SELECT * FROM userTable WHERE username = ?', [username], function (error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {       // db에서의 반환값이 있다 = 일치하는 아이디가 있다.      

                bcrypt.compare(password , results[0].password, (err, result) => {    // 입력된 비밀번호가 해시된 저장값과 같은 값인지 비교

                    if (result === true) {                  // 비밀번호가 일치하면
                        req.session.is_logined = true;      // 세션 정보 갱신
                        req.session.nickname = username;
                        req.session.save(function () {
                            sendData.isLogin = "True"
                            res.send(sendData);
                        });
                        db.query(`INSERT INTO logTable (created, username, action, command, actiondetail) VALUES (NOW(), ?, 'login' , ?, ?)`
                            , [req.session.nickname, '-', `React 로그인 테스트`], function (error, result) { });
                    }
                    else{                                   // 비밀번호가 다른 경우
                        sendData.isLogin = "로그인 정보가 일치하지 않습니다."
                        res.send(sendData);
                    }
                })                      
            } else {    // db에 해당 아이디가 없는 경우
                sendData.isLogin = "아이디 정보가 일치하지 않습니다."
                res.send(sendData);
            }
        });
    } else {            // 아이디, 비밀번호 중 입력되지 않은 값이 있는 경우
        sendData.isLogin = "아이디와 비밀번호를 입력하세요!"
        res.send(sendData);
    }
});

app.post("/signin", (req, res) => {  // 데이터 받아서 결과 전송
    const username = req.body.userId;
    const password = req.body.userPassword;
    const password2 = req.body.userPassword2;
    
    const sendData = { isSuccess: "" };

    if (username && password && password2) {
        db.query('SELECT * FROM userTable WHERE username = ?', [username], function(error, results, fields) { // DB에 같은 이름의 회원아이디가 있는지 확인
            if (error) throw error;
            if (results.length <= 0 && password == password2) {         // DB에 같은 이름의 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우
                const hasedPassword = bcrypt.hashSync(password, 10);    // 입력된 비밀번호를 해시한 값
                db.query('INSERT INTO userTable (username, password) VALUES(?,?)', [username, hasedPassword], function (error, data) {
                    if (error) throw error;
                    req.session.save(function () {                        
                        sendData.isSuccess = "True"
                        res.send(sendData);
                    });
                });
            } else if (password != password2) {                     // 비밀번호가 올바르게 입력되지 않은 경우                  
                sendData.isSuccess = "입력된 비밀번호가 서로 다릅니다."
                res.send(sendData);
            }
            else {                                                  // DB에 같은 이름의 회원아이디가 있는 경우            
                sendData.isSuccess = "이미 존재하는 아이디 입니다!"
                res.send(sendData);  
            }            
        });        
    } else {
        sendData.isSuccess = "아이디와 비밀번호를 입력하세요!"
        res.send(sendData);  
    }
    
});



app.use(cors());
app.use(express.json());
 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0615',
  database: 'cap',
});

// 게시글 목록 조회 페이지네이션 추가
app.get('/board', (req, res) => {
  const page = req.query.page || 1;
  const pageSize = 10; // 한 페이지에 보여줄 게시글 수
  const offset = (page - 1) * pageSize;

  const countQuery = 'SELECT COUNT(*) as totalCount FROM posts';
  db.query(countQuery, (countErr, countResults) => {
    if (countErr) {
      console.error('Database count query error:', countErr);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const totalCount = countResults[0].totalCount;

    const query = 'SELECT id, title, author, timestamp, content FROM posts LIMIT ? OFFSET ?';
    db.query(query, [pageSize, offset], (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // 클라이언트로 전송할 때 ISO 형식으로 변환하지 않음
        const postsWithoutISODate = results.map((post) => ({
          ...post,
          // timestamp: new Date(post.timestamp).toISOString(), // 주석 처리
        }));
        res.setHeader('X-Total-Count', totalCount);
        res.status(200).json(postsWithoutISODate); // ISO 형식으로 변환하지 않은 데이터 전송
      }
    });
  });
});



// 새로운 게시글 작성
app.post('/board', (req, res) => {
  const { title, author, content } = req.body;

  if (!title || !author || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // 클라이언트에서 받은 ISO 형식의 날짜를 JavaScript Date 객체로 파싱
  const clientTimestamp = new Date(req.body.timestamp);

  // 유효한 Date 객체인지 확인
  if (isNaN(clientTimestamp.getTime())) {
    return res.status(400).json({ error: 'Invalid timestamp format' });
  }

  // JavaScript Date 객체를 MySQL DATETIME 형식으로 변환
  const timestamp = clientTimestamp.toISOString().slice(0, 19).replace('T', ' ');

  const query = 'INSERT INTO posts (title, author, timestamp, content) VALUES (?, ?, ?, ?)';
  const values = [title, author, timestamp, content];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // 클라이언트로 전송할 때 ISO 형식으로 변환
      const insertedPost = {
        id: results.insertId,
        title,
        author,
        timestamp: new Date(timestamp).toISOString(),
        content,
      };
      res.status(201).json(insertedPost);
    }
  });
});

// 게시글 상세 조회
app.get('/board/:id', (req, res) => {
  const postId = req.params.id;
  const query = 'SELECT id, title, author, timestamp, content FROM posts WHERE id = ?';
  
  db.query(query, [postId], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      // 클라이언트로 전송할 때 ISO 형식으로 변환
      const postWithISODate = {
        ...results[0],
        timestamp: new Date(results[0].timestamp).toISOString(),
      };
      res.status(200).json(postWithISODate);
    }
  });
});

// 게시글 댓글 목록 조회
app.get('/board/:id/comments', (req, res) => {
  const postId = req.params.id;
  const query = 'SELECT * FROM comments WHERE post_id = ?';
  db.query(query, [postId], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
});

// 새로운 댓글 작성
app.post('/board/:id/comments', (req, res) => {
  const postId = req.params.id;
  const { username, content } = req.body;

  if (!username || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const query = 'INSERT INTO comments (post_id, username, content) VALUES (?, ?, ?)';
  const values = [postId, username, content];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ id: results.insertId, postId, username, content });
    }
  });
});

//------------------------------------------------------------

// 운동 목록 가져오기
app.get('/review', (req, res) => {
  const query = 'SELECT * FROM exercises';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// 운동 상세 정보 및 댓글 가져오기
app.get('/review/:id', (req, res) => {
  const exerciseId = req.params.id;
  const exerciseQuery = 'SELECT * FROM exercises WHERE id = ?';
  const commentsQuery = 'SELECT * FROM review_comments WHERE exercise_id = ?';

  db.query(exerciseQuery, [exerciseId], (exerciseError, exerciseResults) => {
    if (exerciseError) {
      console.error('Exercise query error:', exerciseError);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (exerciseResults.length === 0) {
      res.status(404).json({ error: 'Exercise not found' });
    } else {
      db.query(commentsQuery, [exerciseId], (commentsError, commentsResults) => {
        if (commentsError) {
          console.error('Comments query error:', commentsError);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          const comments = commentsResults;
          
          // Calculate average rate
          const totalRate = comments.reduce((sum, comment) => sum + comment.rate, 0);
          const averageRate = totalRate / comments.length || 0;

          res.json({ exercise: exerciseResults[0], comments: commentsResults, averageRate });
        }
      });
    }
  });
});


// 새로운 댓글 작성
app.post('/review/:id/comments', (req, res) => {
  const exerciseId = req.params.id;
  const { username, content, rate } = req.body;

  if (!username || !content || !rate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const query = 'INSERT INTO review_comments (exercise_id, username, content, rate) VALUES (?, ?, ?, ?)';
  const values = [exerciseId, username, content, rate];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const newCommentId = results.insertId;

      // 새로 추가된 댓글을 다시 조회하여 클라이언트에 응답
      const getCommentQuery = 'SELECT * FROM review_comments WHERE id = ?';
      db.query(getCommentQuery, [newCommentId], (getCommentError, getCommentResults) => {
        if (getCommentError) {
          console.error('Get comment query error:', getCommentError);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          const newComment = getCommentResults[0];
          res.status(201).json(newComment);
        }
      });
    }
  });
});



//--------------------------------------------------------------------

  // MySQL 연결 여부 확인
if (!connection._connectCalled) {
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      throw err;
    }
  });
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})