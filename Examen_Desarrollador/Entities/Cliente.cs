using System.ComponentModel.DataAnnotations;

namespace Examen_Desarrollador.Entities
{
    public class Cliente
    {
        [Key]public int Cliente_id { get; set; }
        public required string Nombre { get; set; }
        public required string Apellido { get; set; }
        public required string Direccion { get; set; }

        // Relación con Articulos
        //public ICollection<Cliente_articulo> Cliente_articulos { get; set; }
    }
}
