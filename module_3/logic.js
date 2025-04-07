console.log('connected.')

let userHealth = 100
let cpuHealth = 100

document.getElementById('userH').textContent = `You: ${userHealth} HP`;
document.getElementById('cpuH').textContent = `CPU: ${cpuHealth}HP`;

let fireattack=-10
let waterAttack=-20
let healing=+15

function fireAttack(attacktype){
console.log('attack')
if(attacktype=='fire'){
    fireAttack - cpuHealth
     cpuHealth -= fireAttack )

    updateUI()
}
function updateUI(){
    document.getElementById('userH').textContent = `You: ${userHealth} HP`;
    document.getElementById('cpuH').textContent = `CPU: ${cpuHealth}HP`;
}
}