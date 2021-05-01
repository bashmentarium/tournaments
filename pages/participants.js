import Participants from '../views/Participants'

export default Participants

export const getServerSideProps = async () => {
  const response = await fetch(
    'https://bmo-2021-default-rtdb.europe-west1.firebasedatabase.app/users.json'
  ).then(response => response.json())

  const usersArray = []

  for (let key in response) {
    usersArray.push({
      nickname: response[key].userData.nickname,
      contestants: response[key].userData.contestants,
      rank: response[key].userData.contestants
    })
  }

  return {
    props: {
      users: usersArray
    }
  }
}
