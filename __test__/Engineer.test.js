const Engineer = require('../library/Engineer');


describe("Testing Engineer class", () => {
  it("Testing Engineer Instance to be an Object", () => {
    const myEngineer = new Engineer()
    expect(typeof (myEngineer)).toBe("object")
  })
  it("Testing Engineer Name", () => {
    const myEngineer = new Engineer("Bruno")
    expect(myEngineer.name).toBe("Bruno")
  })
  it("Testing Engineer ID", () => {
    const myEngineer = new Engineer("Bruno", 1234)
    expect(myEngineer.id).toBe(1234)
  })
  it("Testing Engineer Email", () => {
    const myEngineer = new Engineer("Bruno", 1234, "test@email.com")
    expect(myEngineer.email).toBe("test@email.com")
  })
  it("Testing Engineer getName", () => {
    const myEngineer = new Engineer("Bruno", 1234, "test@email.com")
    expect(myEngineer.getName()).toBe("Bruno")
  })
  it("Testing Engineer getEmail", () => {
    const myEngineer = new Engineer("Bruno", 1234, "test@email.com")
    expect(myEngineer.getEmail()).toBe("test@email.com")
  })
  it("Testing Engineer getId", () => {
    const myEngineer = new Engineer("Bruno", 1234, "test@email.com")
    expect(myEngineer.getId()).toBe(1234)
  })
  it("Testing Engineer getRole", () => {
    const myEngineer = new Engineer("Bruno", 1234, "test@email.com")
    expect(myEngineer.getRole()).toBe("Engineer")
  })
  it("Testing Engineer getGithub", () => {
    const myEngineer = new Engineer("Bruno", 1234, "test@email.com", "bems2588@github.com")
    expect(myEngineer.getGithub()).toBe("bems2588@github.com")
  })

})