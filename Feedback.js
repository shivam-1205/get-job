
const Feedback = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <title>Let Us Know Your Feedback || Learning Robo</title>
  </head>
  <body>
  <form>
  <div class="row g-3">
      <div class="col-md-6">
          <div class="form-floating">
          <label for="name">Your Name</label>
              <input type="text" class="form-control" id="name" placeholder="Your Name">
             
          </div>
      </div>
      <div class="col-md-6">
          <div class="form-floating">
          <label for="email">Your Email</label>
              <input type="email" class="form-control" id="email" placeholder="Your Email">
          </div>
      </div>
      <div class="col-md-6">
          <div class="form-floating">
          <label for="subject">Subject</label>
              <input type="text" class="form-control" id="subject" placeholder="Subject">
          </div>
      </div>
      <div class="col-md-7">
      <label for="message">Message</label>
          <div class="form-floating">
              <textarea class="form-control" placeholder="Leave a message here" id="message" style="height: 150px"></textarea>
          </div>
      </div>
      <div class="col-12">
          <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
      </div>
  </div>

</form>                 
  </body>
</html>`
