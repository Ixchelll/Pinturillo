(function(){
    const $canvas = document.querySelector('.canvas');
    const context = $canvas.getContext('2d');
    const socket = io()

    const drawPoint =(x, y)=>{
        context.stroke() 
        context.strokeStyle="purple"
        context.lineWidth= 8
        context.beginPath()
        context.moveTo(x, y)
        context.lineTo(x+1, y+1)
    }

    socket.on('draw', ({x, y})=> {
        drawPoint(x, y)
    })

    fetch('/points')
      .then(res => res.json())
      .then(points=> points.forEach(({x, y}) => drawPoint(x,y)))
})()