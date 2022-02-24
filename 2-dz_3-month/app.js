//задание 1

let arr = [1,2,3,4]

const delay = (ms) => new Promise(resolve => {
    setTimeout(resolve, ms)
})

async function main(arr) {
    for (let e of arr){
        await delay(3000)
        console.log(e)
    }
}
main(arr)

//задание 2

function getUsers(onSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // имитация разрешения и отклонения в асинхронном API
      if (onSuccess) {
        resolve([
          { id: 1, name: 'Пётр' },
          { id: 2, name: 'Фёдор' },
          { id: 3, name: 'Егор' },
        ])
      } else {
        reject('Ошибка получения данных!')
      }
    }, 4000)
  })
}

getUsers(true).then(response => {
    console.log(response)
})