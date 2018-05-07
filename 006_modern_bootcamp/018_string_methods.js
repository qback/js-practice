function isValidPassword(password = '') {
  return password.length > 8 && !password.includes('password');
}

console.log(isValidPassword('fdsafdsasafds'));
console.log(isValidPassword('sdfsda'));
console.log(isValidPassword('sdsdspasswordsdfsasdasd'));
