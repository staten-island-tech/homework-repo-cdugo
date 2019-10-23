/* async function go(){
    const p1 = fetch('https://api.github.com/users/wesbos');
    const p2 = fetch('https://api.github.com/users/stolinski');
    const res = await Promise.all([p1, p2])
    const dataPromises = res.map(r => r.json());
    const wesAndScott = await Promise.all(dataPromises);
    console.log(wesAndScott);
};
go() */

async function getData(names){
    const promises = names.map(name => fetch(`https://api.github.com/users/${name}`).then(r => r.json()));
    const people = await Promise.all(promises);
    console.log(people);
}

getData(['wesbos', 'stolinski'])