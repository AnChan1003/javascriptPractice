function showHeader() {
  console.log('Header');
}

const showUsers = async() => {
  try { 
    // const response =  await fetch('https://dotinstall.github.io/setup/fetchapi/invalid-users.json');
    const response =  await fetch('https://dotinstall.github.io/setup/fetchapi/users.json');
    const users = await response.json();
    console.log(users);
    } catch(error) {
      console.log('Error!');
      console.log('Error!' + error);
    }
};
// async function showUser() {
  // try { 
  // const response =  await fetch('https://dotinstall.github.io/setup/fetchapi/invalid-users.json');
  // // const response =  await fetch('https://dotinstall.github.io/setup/fetchapi/users.json');
  // const users = await response.json();
  // console.log(users);
  // } catch(error) {
  //   console.log('Error!');
  //   console.log('Error!' + error);
  // }
// }
function showFooter() {
  console.log('Footer');
}


showHeader();
showUsers();
showFooter();