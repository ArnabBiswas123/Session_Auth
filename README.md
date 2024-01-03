APIs for the project

1---  localhost:5000/api/v1/users/signup  --> post request 
body--> {
    "email":"arnab.biswas.travelanywhereindia@gmail.com",
    "password":"Arnab123",
    "name":"Arnab"
}
2---  localhost:5000/api/v1/users/login   --> post request
body--> {
      "email":"arnab.biswas.travelanywhereindia@gmail.com"
      "password":"Arnab123
}

3-- localhost:5000/api/v1/users/authenticate   -->get request

cookie should be send

only allowed authenticated user

