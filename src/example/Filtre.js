var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var number = [ 3, 30, 50,1,22,55,1,2,66,88,222,36,3,2,1]
const Filtre=()=>{
    var a = words.filter(word => word === 'limit');
    var b = words.filter(word => word.length > 2);
    var c = number.filter(c => c > 20);
    console.log( 'Filtre function', a , b, c)
 
    }
export default Filtre;

