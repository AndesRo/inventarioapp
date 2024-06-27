from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

productos = []

@app.route('/')
def index():
    return render_template('index.html', productos=productos)

@app.route('/registrar', methods=['POST'])
def registrar():
    nombre = request.form['nombre']
    precio = float(request.form['precio'])
    stock = int(request.form['stock'])
    productos.append({'nombre': nombre, 'precio': precio, 'stock': stock})
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(debug=True)
