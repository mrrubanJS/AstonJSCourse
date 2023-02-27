function createPerson({ name, skills } = { name: 'New User', skills: [] }) {
  return {
    name: name,
    skills: skills,
    addSkill(skill) {
      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
      }
      return this;
    },
    removeSkill(skill) {
      const skillIndex = this.skills.indexOf(skill);
      if (skillIndex >= 0) {
        this.skills.splice(skillIndex, 1);
      }
      return this;
    },
    addName(name) {
      this.name = name;
      return this;
    },
  };
}