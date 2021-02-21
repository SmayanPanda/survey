class Form{
constructor(){
    this.title=createElement('h1')
    this.greeting=createElement('h2')

    this.name=createElement('h2')
    this.nameInput=createInput('')

    this.email=createElement('h2')
    this.emailInput=createInput('')

    this.submit=createButton('SUBMIT')
    this.reset=createButton('RESET')

    this.nameInput.style('width','200px')
    this.emailInput.style('width','200px')

    this.submit.style('width','100px')
    this.submit.style('height','50px')
    this.submit.style('background','lightblue')

    this.reset.style('width','100px')
    this.reset.style('height','50px')
    this.reset.style('background','lightblue')

    this.q1=createElement('h3',"1. What was your former profession?")
    this.q1Input=createInput('')
    this.q1Input.style('width','200px')

    this.q2=createElement('h3',"2. How do you define sucess?")
    this.q2Input=createInput('')
    this.q2Input.style('width','200px')

    this.q3=createElement('h3',"3. How do you motivate people?")
    this.q3Input=createInput('')
    this.q3Input.style('width','200px')

    this.q4=createElement('h3',"4. Did you like your previous job ?")
    this.radio1=createRadio('h3')
    this.radio1.option('YES')
    this.radio1.option('NO')
    this.radio1.style('width','120px')

    this.q5=createElement('h3',"5. Do you manage conflict well ?")
    this.radio2=createRadio('h3')
    this.radio2.option('YES')
    this.radio2.option('NO')
    this.radio2.style('width','120px')


}

display(){
    this.title.html("MANAGEMENT SURVEY FORM")
    this.title.position(displayWidth/2-200,20)
    
    this.name.html("NAME :")
    this.name.position(displayWidth/2-100,120)
    this.nameInput.position(displayWidth/2+20,140)

    this.email.html("EMAIL :")
    this.email.position(displayWidth/2-100,160)
    this.emailInput.position(displayWidth/2+20,180)

    this.submit.position(displayWidth/2-100,800)
    this.reset.position(displayWidth/2+100,800)

}


}