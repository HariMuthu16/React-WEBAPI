using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using React_API_App.Models;

namespace React_API_App.Controllers
{
    [Route("api/[controller]")]    
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeDbContext db;

        public EmployeeController(EmployeeDbContext _db)
        {
            db = _db;
        }
        [HttpGet]
        [Route("GetEmployees")]     //  http://localhost:5272/api/Employee/GetEmployees
        public async Task<IEnumerable<Employee>> GetAll()
        {
            return await db.Employees.ToListAsync();
        }

        [HttpGet]
        [Route("GetEmployee/{id}")]   // api/Employee/GetEmployee/{id}
        public async Task<ActionResult<Employee>> Get(int id)
        {
            if(id == 0)
            {
                return NotFound();
            }
            var emp = await db.Employees.FindAsync(id);
            if(emp == null)
            {
                return NotFound();
            }
            return emp;
             
        }
        [HttpPost]
        [Route("AddEmployee")]    // api/Employee/AddEmployee
        public async Task<ActionResult<Employee>> Add(Employee obj)
        {
            db.Employees.Add(obj);
            await db.SaveChangesAsync();
            return obj;

        }

        [HttpPatch] 
        [Route("UpdateEmployee/{id}")]     // api/Employee/UpdateEmployee/{id}
        public async Task<ActionResult<Employee>> Update(Employee obj)
        {
            db.Entry(obj).State = EntityState.Modified;
            await db.SaveChangesAsync();
            return obj;

        }

        [HttpDelete]
        [Route("DeleteEmployee/{id}")]    // api/Employee/DeleteEmployee/{id}
        public bool Delete(int id)
        {
           
            var emp = db.Employees.Find(id);
            db.Employees.Remove(emp);
            db.SaveChangesAsync();
            return true;

        }
    }
}
