const pets = [
  { name: "Bruno", age: "2", id: "1" },
  { name: "Pluto", age: "1", id: "2" },
  { name: "Kabuto", age: "20", id: "3" },
];

module.exports = {
  getPets: (c, req, res) => res.status(200).json({
    pets,
    count: pets.length
  }),
  getPetById: (c, req, res) => {
    const pet = pets.filter(pet => pet.id === c.request.params.id)
    if (!pet.length) {
      return res.status(404).json({"error_message": "not found"})
    }
    return res.status(200).json(pet[0]);
  },
  validationFail: (c, req, res) => res.status(400).json({ err: c.validation.errors }),
  notFound: (c, req, res) => res.status(404).json({ err: 'not found' })
}