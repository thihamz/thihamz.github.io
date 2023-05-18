function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
  }
  
  function draw() {

  }

function drawAll() {

 var protection = 0;
  textAlign(CENTER, TOP);
  
  for (let r = 0; r < table.getRowCount(); r++) {
    const borough = table.getString(r, 'Borough');
    const duration = table.getNum(r, 'Duration');
    const x = random(40, width - 60);
    const y = random(40, height - 40);
    const circleSize = map(duration, 30, 1557, 5, 100, true);
    
    var circle = {
      x: x,
      y: y,
      r: circleSize
    }
    
    var overlapping = false;
    
    for (var j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
        break;
      }
    }
    
    if (!overlapping) {
      circles.push(circle);
      
      fill('black');
      textSize(circleSize / 1.5);
      
      // Displaying text after the ellipse is drawn
      ellipse(circles[j].x, circles[j].y, circles[j].r * 2, circles[j].r * 2);
      text(borough, circles[j].x, circles[j].y + circleSize + 5);
      
    }
    
    protection++;
    
    if (protection > 50000) {
      break;
    }
  }

  for (var i = 0; i < circles.length; i++) {
    colorMode(HSL);
    let circleColor = color(random(0, 360), random(50, 100), random(50, 90));
    fill(circleColor);
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  }
}

function drawManhattan() {
    var protection = 0;
    textAlign(CENTER, TOP);
    
    for (let r = 0; r < table.getRowCount(); r++) {
     
      const borough = table.getString(r, 'Borough');
      const duration = table.getNum(r, 'Duration');
      const x = random(40, width - 60);
      const y = random(40, height - 40);
      const circleSize = map(duration, 30, 1557, 5, 100, true);
      
      if (borough === 'MANHATTAN') { // Check if borough is Manhattan
        var circle = {
          x: x,
          y: y,
          r: circleSize
        }
        
        var overlapping = false;
        
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          var d = dist(circle.x, circle.y, other.x, other.y);
          if (d < circle.r + other.r) {
            overlapping = true;
            break;
          }
        }
        
        if (!overlapping) {
          circles.push(circle);
          
          fill('black');
          textSize(circleSize / 1.5);
          
          // Displaying text after the ellipse is drawn
          ellipse(circles[j].x, circles[j].y, circles[j].r * 2, circles[j].r * 2);
          text(borough, circles[j].x, circles[j].y + circleSize + 5);
        }
      }
      
      protection++;
      
      if (protection > 50000) {
        break;
      }
    }

    for (var i = 0; i < circles.length; i++) {
      colorMode(HSL);
      let circleColor = color(random(0, 360), random(50, 100), random(50, 90));
      fill(circleColor);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    }
  }

  function drawBrooklyn() {
    
    var protection = 0;
    textAlign(CENTER, TOP);
    
    for (let r = 0; r < table.getRowCount(); r++) {
      const borough = table.getString(r, 'Borough');
      const duration = table.getNum(r, 'Duration');
      const x = random(40, width - 60);
      const y = random(40, height - 40);
      const circleSize = map(duration, 30, 1557, 5, 100, true);
      
      if (borough === 'BROOKLYN') { // Check if borough is Manhattan
        var circle = {
          x: x,
          y: y,
          r: circleSize
        }
        
        var overlapping = false;
        
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          var d = dist(circle.x, circle.y, other.x, other.y);
          if (d < circle.r + other.r) {
            overlapping = true;
            break;
          }
        }
        
        if (!overlapping) {
          circles.push(circle);
          
          fill('black');
          textSize(circleSize / 1.5);
          
          // Displaying text after the ellipse is drawn
          ellipse(circles[j].x, circles[j].y, circles[j].r * 2, circles[j].r * 2);
          text(borough, circles[j].x, circles[j].y + circleSize + 5);
        }
      }
      
      protection++;
      
      if (protection > 50000) {
        break;
      }
    }
  
    for (var i = 0; i < circles.length; i++) {
      colorMode(HSL);
      let circleColor = color(random(0, 360), random(50, 100), random(50, 90));
      fill(circleColor);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    }
  }

  function drawQueens() {
    var protection = 0;
    textAlign(CENTER, TOP);
    
    for (let r = 0; r < table.getRowCount(); r++) {
      const borough = table.getString(r, 'Borough');
      const duration = table.getNum(r, 'Duration');
      const x = random(40, width - 60);
      const y = random(40, height - 40);
      const circleSize = map(duration, 30, 1557, 5, 100, true);
      
      if (borough === 'QUEENS') { // Check if borough is Manhattan
        var circle = {
          x: x,
          y: y,
          r: circleSize
        }
        
        var overlapping = false;
        
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          var d = dist(circle.x, circle.y, other.x, other.y);
          if (d < circle.r + other.r) {
            overlapping = true;
            break;
          }
        }
        
        if (!overlapping) {
          circles.push(circle);
          
          fill('black');
          textSize(circleSize / 1.5);
          
          // Displaying text after the ellipse is drawn
          ellipse(circles[j].x, circles[j].y, circles[j].r * 2, circles[j].r * 2);
          text(borough, circles[j].x, circles[j].y + circleSize + 5);
        }
      }
      
      protection++;
      
      if (protection > 50000) {
        break;
      }
    }
  
    for (var i = 0; i < circles.length; i++) {
      colorMode(HSL);
      let circleColor = color(random(0, 360), random(50, 100), random(50, 90));
      fill(circleColor);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    }
  }

  function drawBronx() {
    var protection = 0;
    textAlign(CENTER, TOP);
    
    for (let r = 0; r < table.getRowCount(); r++) {
      const borough = table.getString(r, 'Borough');
      const duration = table.getNum(r, 'Duration');
      const x = random(40, width - 60);
      const y = random(40, height - 40);
      const circleSize = map(duration, 30, 1557, 5, 100, true);
      
      if (borough === 'BRONX') { // Check if borough is Manhattan
        var circle = {
          x: x,
          y: y,
          r: circleSize
        }
        
        var overlapping = false;
        
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          var d = dist(circle.x, circle.y, other.x, other.y);
          if (d < circle.r + other.r) {
            overlapping = true;
            break;
          }
        }
        
        if (!overlapping) {
          circles.push(circle);
          
          fill('black');
          textSize(circleSize / 1.5);
          
          // Displaying text after the ellipse is drawn
          ellipse(circles[j].x, circles[j].y, circles[j].r * 2, circles[j].r * 2);
          text(borough, circles[j].x, circles[j].y + circleSize + 5);
        }
      }
      
      protection++;
      
      if (protection > 50000) {
        break;
      }
    }
  
    for (var i = 0; i < circles.length; i++) {
      colorMode(HSL);
      let circleColor = color(random(0, 360), random(50, 100), random(50, 90));
      fill(circleColor);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    }
  }

  function drawStaten() {
    var protection = 0;
    textAlign(CENTER, TOP);
    
    for (let r = 0; r < table.getRowCount(); r++) {
      const borough = table.getString(r, 'Borough');
      const duration = table.getNum(r, 'Duration');
      const x = random(40, width - 60);
      const y = random(40, height - 40);
      const circleSize = map(duration, 30, 1557, 5, 100, true);
      
      if (borough === 'STATEN ISLAND') { // Check if borough is Manhattan
        var circle = {
          x: x,
          y: y,
          r: circleSize
        }
        
        var overlapping = false;
        
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          var d = dist(circle.x, circle.y, other.x, other.y);
          if (d < circle.r + other.r) {
            overlapping = true;
            break;
          }
        }
        
        if (!overlapping) {
          circles.push(circle);
          
          fill('black');
          textSize(circleSize / 1.5);
          
          // Displaying text after the ellipse is drawn
          ellipse(circles[j].x, circles[j].y, circles[j].r * 2, circles[j].r * 2);
          text(borough, circles[j].x, circles[j].y + circleSize + 5);
        }
      }
      
      protection++;
      
      if (protection > 50000) {
        break;
      }
    }
  
    for (var i = 0; i < circles.length; i++) {
      colorMode(HSL);
      let circleColor = color(random(0, 360), random(50, 100), random(50, 90));
      fill(circleColor);
      ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    }
  }

  function clearCanvas() {
    clear();
  }