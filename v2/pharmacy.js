const button = document.querySelector('.nav-but')
const form = document.querySelector('.login-form')
    button.addEventListener('click', function (e) {
        e.preventDefault()
        
        form.style.display = "block"
        form.innerHTML = `
            <h2 >Log In</h2>
        
            <label for="email" required  >Email:</label><br>
            <input type="email" id="email" placeholder="Enter your email" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 10px;"><br><br>

            <label for="password" required >Password:</label><br>
            <input type="password" id="password" placeholder="enter password" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 10px;"><br><br>

            <button type="submit" style="width: 100%; padding: 5px 0; background-color: #4CAF50; color: white; border: none; border-radius: 4px;">Submit</button>`
    })