
// Public
// Export object type

function User(n) {
  this.name = n;
}

User.prototype.sayHi = function () {
  console.log('Hi, my name is ' + this.name);
};

module.exports = User;
// End public section