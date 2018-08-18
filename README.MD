# Team name : A2B2O2

## API Document

* POST /signup : User Signup (유저 회원가입)

> Params

    id : User's id

    passwd : User's passwd

    phone : User's phone

    her : User's broken girl friend's phone

> Response

    HTTP 200 : user json (회원 정보)

    HTTP 409 : {message : "already exist"},

    HTTP 400 : {message : e.message} (에러 메시지가 string 으로 반환

* POST /signin : User Signin (유저 로그인)

> Params

    id : User's id

    passwd : User's passwd

> Response

    HTTP 200 : User's token
    ex)
    {
      "token": "WVWHBvLrZrQ8qbpShQXxeJd7Q"
    }

    HTTP 404 : {message : "User Not Found!"}

* GET /auto/:token : User auto Signin (유저 자동 로그인)

> Params

    token : User's token

> Response

    HTTP 200 : User's info
    ex)
    {
      "user": {
        "token": "WVWHBvLrZrQ8qbpShQXxeJd7Q",
        "id": "fuckedcan",
        "passwd": "akat32!",
        "phone": "01011111111",
        "her": "01022222222"
      }
    }
