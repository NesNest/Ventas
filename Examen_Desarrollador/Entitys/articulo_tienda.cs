using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Examen_Desarrollador.Entitys
{
    public class Articulo_tienda
    {
        [Key, Column(Order = 0)]public int Articulo_id { get; set; }
        [Key, Column(Order = 1)]public int Tienda_id { get; set; }
        public DateTime Fecha { get; set; }
    }
}
