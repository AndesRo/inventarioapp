from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    error_message = None
    inventario_nuevo = None
    inventario_actual = None
    cantidad_vendida = None
    
    if request.method == 'POST':
        try:
            inventario_actual = int(request.form['inventario_actual'])
            cantidad_vendida = int(request.form['cantidad_vendida'])
            
            if inventario_actual < 0 or cantidad_vendida < 0:
                error_message = "Las cantidades no pueden ser negativas."
            elif cantidad_vendida > inventario_actual:
                error_message = "La cantidad vendida no puede exceder la cantidad en inventario."
            else:
                inventario_nuevo = inventario_actual - cantidad_vendida
        except ValueError:
            error_message = "Ingrese números enteros válidos."

    return render_template('index.html', 
                           error_message=error_message, 
                           inventario_nuevo=inventario_nuevo, 
                           inventario_actual=inventario_actual, 
                           cantidad_vendida=cantidad_vendida)

if __name__ == "__main__":  
    app.run(debug=True)
