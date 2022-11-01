const tamogotchi = {
    name: 'Киррил',
    meal: 1,
    energy: 2,
    mood: 4,
    voice: 0,
    getStatus() {
        let result_meal = this.meal < 3 ? 'Я голоден' : 'Я не голоден';
        let result_energy = this.energy < 3 ? 'Я хочу спать': 'Я не хочу спать';
        let result_mood = this.mood < 3 ? 'Мне скучно' : 'Мне не скучно'
        if(this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            console.log(`${this.name} умер :(` )
        }
        console.log(`Имя: ${this.name} Еда: ${result_meal} (${this.meal}) Энегрия: ${result_energy} (${this.energy}) Настроение: ${result_mood} (${this.mood}) голос: ${this.voice}  `)
    },
     setName(name) {
        this.name = name; 
     },
     eat() {
        if(this.meal < 5) {
            this.meal++, this.mood--
        }
     },
     sleep() {
        if(this.energy < 5) {
            this.energy++, this.meal--
        }
     },
     play() {
        if(this.mood < 5) {
            this.mood++, this.energy--
        }
     },
     barking() {
        if( this.meal === 3) {
            this.voice++
        }
     }

  }
  tamogotchi.getStatus()
  tamogotchi.setName('Годзила')
  tamogotchi.eat()
  tamogotchi.barking()
  tamogotchi.getStatus()

