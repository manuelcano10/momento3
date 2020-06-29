from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'galeria'
dbquotes = MySQL(app)

#configuraciones
app.secret_key= 'mysecretkey'

@app.route('/')
def index():
    sql = "SELECT * FROM galeriaapp"
    cur = dbquotes.connection.cursor()
    cur.execute(sql)
    result = cur.fetchall()
    return render_template('home.html', quotes = result)


@app.route('/citas')
def citas():
    return render_template('assigned-appointments.html')


@app.route('/delete/<string:nombre>')
def delete(nombre):
    cur = dbquotes.connection.cursor()
    cur.execute('DELETE FROM galeriaapp WHERE nombre = {0}',format(nombre))
    dbquotes.connection.commit()
    flash('Cita removida con exito!')
    return redirect(url_for('index'))

@app.route('/addquote', methods={'POST'})
def addquote():
    if request.method == 'POST':
        title = request.form['title']
        tipe = request.form['tipe']
        address = request.form['address']
        rooms = request.form['rooms']
        price = request.form['price']
        area = request.form['area']
        cur = dbquotes.connection.cursor()
        sql = f"INSERT INTO galeriaapp (title,tipe,address,rooms,price,area) VALUES ('{title}','{tipe}','{address}','{rooms}','{price}','{area}')"
        cur.execute(sql)
        dbquotes.connection.commit()
        flash('Cita agendada con Exito!')
        return redirect(url_for('index'))
    return "Error"


if __name__== "__main__":
    app.run(debug=True)

