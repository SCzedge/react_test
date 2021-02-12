const users = [
  { email: 'kim@test.com', password: '123', name: 'kim' },
  { email: 'lee@test.com', password: '456', name: 'lee' },
  { email: 'park@test.com', password: '789', name: 'park' },
];

export function signIn({ email, password }) {
  const user = users.find(
    (user) => user.email === email && user.password == password
  );
  if (user === undefined) throw new Error();
  return user;
}
