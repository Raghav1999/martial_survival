
let inventory = []

export const getInventory = (req, res) => {
    res.send(inventory)
}

export const inputRation = (req, res) => {
    res.sendFile("rationForm.html", { root: "public" })
}

export const addRation = (req, res) => {
    const ration = req.body
    console.log(ration)
    inventory.push(ration)
    res.send("Ration Added Successfully!<br>See all Inventory : <a href='/inventory'>/inventory</a>")
}