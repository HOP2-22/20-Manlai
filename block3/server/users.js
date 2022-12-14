const users = [
  { id: 1, firstName: "Lebron", lastName: "James" },
  { id: 2, firstName: "Steph", lastName: "Curry" },
  { id: 3, firstName: "Michael", lastName: "Jordan" },
  { id: 4, firstName: "Giannis", lastName: "Antetokoumpo" },
  { id: 5, firstName: "Jayson", lastName: "Tatum" },
  { id: 6, firstName: "Luka", lastName: "Doncic" },
  { id: 7, firstName: "Lamelo", lastName: "Ball" },
  { id: 8, firstName: "Manlai", lastName: "Nice" },
];

exports.getUsers = (request, response) => {
    response.status(200).json({
        users: users.
  });
};

exports.createUser = (request, response) => {
    users.push({ id: users.length + 1, ...request.body })
    console.log(users);
    response.status(200).json({ message: "new user created"});
}