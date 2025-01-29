function simplePair(arr, result)
{
    for (base=0; base<arr.length; base++)
    {
        for (mul=1; mul<arr.length; mul++)
        {
            if (arr[base] * arr[mul] === result)
            {
                if (arr[base] === arr[mul])
                    return null
                else
                    return [arr[base], arr[mul]]
            }
        }
    }
}

console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));


