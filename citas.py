from flask import Flask, render_template, request, redirect, url_for
import requests as req

app = Flask(__name__)

@app.route('/')
def index():
    response = req.get('http://localhost:3000/api/listquotes')
    result = response.json()['']
    return render_template('home.html', quotes = result)


@app.route('/citas')
def citas():
    return render_template('assigned-appointments.html')


@app.route

@app.route('/addquote', methods={'POST'})
def addquote():
    if request.method == 'POST':
        name = request.form['name']
        surname = request.form['surname']
        document = request.form['document']
        birth_date = request.form['birth_date']
        city = request.form['city']
        neighborhood = request.form['neighborhood']
        mobile = request.form['mobile']
        return redirect(url_for('index'))
    return "Error"


if __name__== "__main__":
    app.run(debug=True)

