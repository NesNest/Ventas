using System.ComponentModel.DataAnnotations;

namespace Examen_Desarrollador.Entities
{
    public class Tienda
    {
        [Key]public int Tienda_id { get; set; }
        public required string Nombre { get; set; }
        public required string Direccion { get; set; }
    }
}
