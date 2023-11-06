const hobbies = ["jogar online","fazer academia","andar de kart","jogar airsoft","jogar poker"]

console.log(hobbies)

console.log(hobbies[0])
console.log(hobbies[1])
console.log(hobbies[2])
console.log(hobbies[3])
console.log(hobbies[4])

hobbies[4] = "fazer crochê"
console.log(hobbies)

tamanho_da_lista = hobbies.length
console.log(tamanho_da_lista)

hobbies.push("nadar")
console.log(hobbies)

hobbies.pop()
console.log(hobbies)

index = hobbies.indexOf("fazer academia")
hobbies.splice(index, 1)
console.log(hobbies)

const hobbies_do_amigo = ["jogar basquete", "assistir F1"]
const todos_os_hobbies = hobbies.concat(hobbies_do_amigo)
console.log(todos_os_hobbies)

const hobbies_musicais = ["cantar", "tocar guitarra", "escutar música"]
const hobbies_esportivos = ["jogar futebol", "correr", "nadar"]
const hobbies_artísticos = ["desenhar", "pintar", "programar"]

const categorias_de_hobbies = [hobbies_musicais, hobbies_esportivos, hobbies_artísticos]
console.log(categorias_de_hobbies[0])

console.log(categorias_de_hobbies[0][0])
console.log(categorias_de_hobbies[0][2])
