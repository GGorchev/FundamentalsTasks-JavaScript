// function languages(country) {
//     if (country == 'England') {
//     console.log('English');
//     } else if (country == 'USA') {
//     console.log('English');
//     } else if (country == 'Spain') {
//     console.log('Spanish');
//     } else if (country == 'Argentina') {
//     console.log('Spanish');
//     } else if (country == 'Mexico') {
//     console.log('Spanish');
//     } else {
//     console.log('unknown');
//     }
// }

// languages('Germany')

// function languages2(country) {
//     switch(country) {
//         case 'USA' :
//         console.log('English');
//         break;
//         case 'England':
//         console.log('English');
//         break;
//         case 'Spain':
//         console.log('Spanish');
//         break;
//         case 'Mexico':
//         console.log('Spanish');
//         break;
//         case 'Argentina':
//         console.log('Spanish');
//         break;
//         default:
//         console.log('unknown');
//         break
//     }
// }

// languages2('Mexico')

function languages3(country) {
    if (country == 'USA' || country == 'England') {
        console.log('English');
    } else if (country == 'Spain' || country == 'Argentina' || country == 'Mexico') {
        console.log('Spanish');
    } else 
    console.log('unknown');
}

languages3('Bulgaria')