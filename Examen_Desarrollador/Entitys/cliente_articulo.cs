using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Examen_Desarrollador.Entitys
{
    public class Cliente_articulo
    {
        [Key, Column(Order = 0)] public int Cliente_id { get; set; }
        [Key, Column(Order = 1)] public int Articulo_id { get; set; }
        public DateTime Fecha { get; set; }
    }
}
