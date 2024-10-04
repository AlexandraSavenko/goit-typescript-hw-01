type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
let currentUser: User = {
  name: "Sasha",
  surname: "Savenko",
  email: "sashasavenko3@gmail.com",
  password: "myBestPassword3",
};
function createOrUpdateUser(initialValues: Partial<User>) {
  currentUser = { ...currentUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
