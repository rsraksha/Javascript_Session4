const date = new Date('02-09-2022');
console.log("Date = 09-02-2022")
const day1 = date.getDay();
function switch1 (day1) 
{
    var ans=""
    switch(day1)
    {
        case 0:
            ans="Sunday"
            break;
        case 1:
            ans="Monday"
            break;
        case 2:
            ans="Tuesday"
            break;
        case 3:
            ans="Wednesday"
            break;
        case 4:
            ans="Thursday"
            break;
        case 5:
            ans="Friday"
            break;
        case 6:
            ans="Saturday"
            break;
        default:
            ans="Wrong input"
            break;
    }
    return ans
}
console.log("Day =",switch1(day1));
























