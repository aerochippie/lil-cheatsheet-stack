const triangles = [
   {
       length: 10,
       height: 20,
       width: 30
   },
   {
       length: 20,
       height: 10,
       width: 10
   },
   {
       length: 30,
       height: 20,
       width: 20
   }
 ];
  const areas = triangles.map((triangle) =>
   triangle.length * triangle.height * triangle.width
  );

  console.log(areas);