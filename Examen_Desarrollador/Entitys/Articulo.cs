using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Examen_Desarrollador.Entitys
{
    public class Articulo
    {
        [Key]
        public int Articulo_id { get; set; }

        public required string Nombre { get; set; }
        public required string Descripcion { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public required decimal Precio { get; set; }

        public required int Stock { get; set; }

        // Relación con Tienda y Cliente
        public ICollection<Articulo_tienda> TiendaArticulos { get; set; }
        public ICollection<Cliente_articulo> ClienteArticulos { get; set; }
    }
}
