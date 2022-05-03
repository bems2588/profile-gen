const Manager = require('../library/Manager');


describe("Testing Manager class", () => {
  it("Testing Manager Instance to be an Object", () => {
    const myManager = new Manager()
    expect(typeof (myManager)).toBe("object")
  })
  it("Testing Manager Name", () => {
    const myManager = new Manager("Bruno")
    expect(myManager.name).toBe("Bruno")
  })
  it("Testing Manager ID", () => {
    const myManager = new Manager("Bruno", 1234)
    expect(myManager.id).toBe(1234)
  })
  it("Testing Manager Email", () => {
    const myManager = new Manager("Bruno", 1234, "test@email.com")
    expect(myManager.email).toBe("test@email.com")
  })
  it("Testing Manager getName", () => {
    const myManager = new Manager("Bruno", 1234, "test@email.com")
    expect(myManager.getName()).toBe("Bruno")
  })
  it("Testing Manager getEmail", () => {
    const myManager = new Manager("Bruno", 1234, "test@email.com")
    expect(myManager.getEmail()).toBe("test@email.com")
  })
  it("Testing Manager getId", () => {
    const myManager = new Manager("Bruno", 1234, "test@email.com")
    expect(myManager.getId()).toBe(1234)
  })
  it("Testing Manager getRole", () => {
    const myManager = new Manager("Bruno", 1234, "test@email.com")
    expect(myManager.getRole()).toBe("Manager")
  })
  it("Testing Manager getOfficeNumber", () => {
    const myManager = new Manager("Bruno", 1234, "test@email.com", 456)
    expect(myManager.getOfficeNumber()).toBe(456)
  })

})