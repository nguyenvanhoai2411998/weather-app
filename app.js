var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var value = document.querySelector('.value')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeatherUI(capitalSearch){
    
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=50547b589bf5f64065c3e70f18f4b49a`

    let data = await fetch(apiURL).then(res=> res.json())
    if(data.cod == 200){
        content.classList.remove('hide')
        console.log(data);
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round((data.main.temp - 273.15)*10)/10 +'°C'
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString()
        
        body.setAttribute('class', 'hot')
        if(temp > 27){
            body.setAttribute('class', 'hot')
        }else if(temp > 22){
            body.setAttribute('class', 'warm')
        }else if(temp > 17){
            body.setAttribute('class', 'cool')
        }else{
            body.setAttribute('class', 'cold')
        }
    }else{

        content.classList.add('hide')
        console.log('not found')
    }

}

search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)
    }
})

changeWeatherUI('Seoul')