const hobbies = ["jogar online","fazer academia","andar de kart","jogar airsoft","jogar poker"]

//parte 2

console.log(hobbies)

//parte 3

console.log(hobbies[0])
console.log(hobbies[1])
console.log(hobbies[2])
console.log(hobbies[3])
console.log(hobbies[4])

//parte 4

hobbies[4] = "fazer crochê"
console.log(hobbies)

//parte 5

tamanho_da_lista = hobbies.length
console.log(tamanho_da_lista)

//parte 6

hobbies.push("nadar")
console.log(hobbies)

//parte 7 

hobbies.pop()
console.log(hobbies)

//parte 8

index = hobbies.indexOf("fazer academia")
hobbies.splice(index, 1)
console.log(hobbies)

//parte 9

const hobbies_do_amigo = ["jogar basquete", "assistir F1"]
const todos_os_hobbies = hobbies.concat(hobbies_do_amigo)
console.log(todos_os_hobbies)

//parte 10

const hobbies_musicais = ["cantar", "tocar guitarra", "escutar música"]
const hobbies_esportivos = ["jogar futebol", "correr", "nadar"]
const hobbies_artísticos = ["desenhar", "pintar", "programar"]

const categorias_de_hobbies = [hobbies_musicais, hobbies_esportivos, hobbies_artísticos]
console.log(categorias_de_hobbies[0])

//parte 10.1

console.log(categorias_de_hobbies[0][0])
console.log(categorias_de_hobbies[0][2])
