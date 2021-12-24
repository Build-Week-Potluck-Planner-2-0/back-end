**Test Login Information**

- **testUser1**

username: test,
password: test,

- **testUser2**

username: test2,
password: test,

- **testUser3**

username: test3,
password: test,

# **Endpoints**

**baseUrl** : [https://bw-potluck-planner-2.herokuapp.com/](https://bw-potluck-planner-2.herokuapp.com/)

**Potluck Endpoints**

- **Delete a Potluck Event**

[DELETE] api/potlucks/:potluck\_id/:user\_id

**Note:** Requires provided token in request headers as authentication: token

- **Potluck Events I&#39;ve created and am invited to**

[GET] api/potlucks/:user\_id/potlucks

**Note:** Requires provided token in request headers as authentication: token

- **Get a specific potluck**

[GET] api/potlucks/:potluck\_id

**Note:** Requires provided token in request headers as authentication: token

- **Create a Potluck Event:**

[POST] api/potlucks/:user\_id

**expects:** all potluck details, invites, and items

**returns** : all potlucks related to the user\_id

**Note:** Requires provided token in request headers as authentication: token

- **Update a Potluck Event:**

[PUT] api/potlucks/:potluck\_id/:user\_id

**expects:** all potluck details, invites, and items

**returns:** all potlucks related to the user\_id

**Note:** Requires provided token in request headers as authentication: token

**User Endpoints**

- **Get All Users:**

[GET] api/users

**returns** all usernames, emails, and ids

**Note:** Requires provided token in request headers as authentication: token

- **Register New User:**

[POST] api/auth/register

**expects** {username, password, email}

**returns** {username, email, user\_id, token}

- **User Logs In:**

[POST] api/auth/login

**expects** {username, password}

**returns** {username, email, user\_id, token}

**Run Local Server**

npm run server

**Created by: erikjbahena@gmail.com**