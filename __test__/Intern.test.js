const Intern = require('../library/Intern');


describe("Testing Intern class", () => {
  it("Testing Intern Instance to be an Object", () => {
    const myIntern = new Intern()
    expect(typeof (myIntern)).toBe("object")
  })
  it("Testing Intern Name", () => {
    const myIntern = new Intern("Bruno")
    expect(myIntern.name).toBe("Bruno")
  })
  it("Testing Intern ID", () => {
    const myIntern = new Intern("Bruno", 1234)
    expect(myIntern.id).toBe(1234)
  })
  it("Testing Intern Email", () => {
    const myIntern = new Intern("Bruno", 1234, "test@email.com")
    expect(myIntern.email).toBe("test@email.com")
  })
  it("Testing Intern getName", () => {
    const myIntern = new Intern("Bruno", 1234, "test@email.com")
    expect(myIntern.getName()).toBe("Bruno")
  })
  it("Testing Intern getEmail", () => {
    const myIntern = new Intern("Bruno", 1234, "test@email.com")
    expect(myIntern.getEmail()).toBe("test@email.com")
  })
  it("Testing Intern getId", () => {
    const myIntern = new Intern("Bruno", 1234, "test@email.com")
    expect(myIntern.getId()).toBe(1234)
  })
  it("Testing Intern getRole", () => {
    const myIntern = new Intern("Bruno", 1234, "test@email.com")
    expect(myIntern.getRole()).toBe("Intern")
  })
  it("Testing Intern getSchool", () => {
    const myIntern = new Intern("Bruno", 1234, "test@email.com", "my school")
    expect(myIntern.getSchool()).toBe("my school")
  })

})