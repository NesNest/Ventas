using Examen_Desarrollador.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// cadena de conexión a la base de datos 
var conecctionString = builder.Configuration.GetConnectionString("DefaultConnection");

// registrar servicio de base de datos
builder.Services.AddDbContext<DBcontext>(options =>
    options.UseSqlServer(conecctionString));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//enlace a angular
var origenPermitido = "http://localhost:4200";
    //builder.Configuration.GetValue<string>("http://localhost:4200")!.Split(",");
// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.WithOrigins(origenPermitido)
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// CORS
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
