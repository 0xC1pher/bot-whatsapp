class MessageBot {
    constructor(inputSelector, sendButtonSelector) {
        this.inputElement = this.getElement(inputSelector);
        this.sendButtonElement = this.getElement(sendButtonSelector);
    }

    getElement(selector) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`Elemento no encontrado: ${selector}`);
        }
        return element;
    }

    sendMessage(message) {
        if (this.inputElement && this.sendButtonElement) {
            this.inputElement.value = message; // Escribe el mensaje en el campo de texto
            this.sendButtonElement.click(); // Simula el clic en el botón de enviar
            console.log(`Mensaje enviado: ${message}`);
        }
    }

    static generateMessage(content) {
        return content || "Mensaje predeterminado"; // Mensaje por defecto si no se proporciona contenido
    }
}

// Configura el bot
const bot = new MessageBot('#inputField', '#sendButton'); // Cambia los selectores según tu página

// Envía un mensaje
const message = WhatsAppBot.generateMessage("Hola, este es un mensaje normal.");
//Instrucciones:
//Abre WhatsApp Web en tu navegador y asegúrate de que estás conectado.
//Haz clic en el chat del contacto o grupo al que deseas enviar el mensaje.
//Abre la consola del navegador (F12 o clic derecho -> Inspeccionar -> Consola).
//Copia y pega el código del bot en la consola.
//Ejecuta el código y el bot enviará el mensaje al chat activo.
//Chat Activo: El bot no puede seleccionar automáticamente un chat; debe estar abierto en la interfaz de WhatsApp Web.
