using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using TODO_API.Models;
using Microsoft.Extensions.Configuration;

namespace TODO_API.DAL
{
    public abstract class BaseRepository
    {
        private readonly IConfiguration _configuration;
        private static string _connetionString;
        protected BaseRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        protected async Task<T> WithConnection<T>(Func<IDbConnection,Task<T>> getData)
        {
            try
            {
                if(string.IsNullOrEmpty(_connetionString))
                {
                    string connectionString=_configuration.GetConnectionString("DbConnection");
                    _connetionString = connectionString;
                }
                await using(var connection=new SqlConnection(_connetionString))
                {
                    await connection.OpenAsync();
                    return await getData(connection);
                }
            }
            catch(TimeoutException ex)
            {
                throw new Exception(string.Format("{0}.WithConnection() experienced SQL Timeout", GetType().FullName), ex);

            }
            catch (SqlException ex)
            {
                throw new Exception(string.Format("{0}.WithConnection() experienced SQL exception", GetType().FullName), ex);

            }
        }
        protected async Task WithConnection(Func<IDbConnection, Task> getData)
        {
            try
            {
                if (string.IsNullOrEmpty(_connetionString))
                {
                    string connectionString = _configuration.GetConnectionString("DbConnection");
                    _connetionString = connectionString;
                }
                await using (var connection = new SqlConnection(_connetionString))
                {
                    await connection.OpenAsync();
                    await getData(connection);
                }
            }
            catch (TimeoutException ex)
            {
                throw new Exception(string.Format("{0}.WithConnection() experienced SQL Timeout", GetType().FullName), ex);

            }
            catch (SqlException ex)
            {
                throw new Exception(string.Format("{0}.WithConnection() experienced SQL exception", GetType().FullName), ex);

            }
        }

        protected async Task<TResult> WithConnection<TRead,TResult>(Func<IDbConnection, Task<TRead>> getData, Func<TRead,Task<TResult>> Process)
        {
            try
            {
                if (string.IsNullOrEmpty(_connetionString))
                {
                    string connectionString = _configuration.GetConnectionString("DbConnection");
                    _connetionString = connectionString;
                }
                await using (var connection = new SqlConnection(_connetionString))
                {
                    await connection.OpenAsync();
                    var data = await getData(connection);
                    return await Process(data);
                }
            }
            catch (TimeoutException ex)
            {
                throw new Exception(string.Format("{0}.WithConnection() experienced SQL Timeout", GetType().FullName), ex);

            }
            catch (SqlException ex)
            {
                throw new Exception(string.Format("{0}.WithConnection() experienced SQL exception", GetType().FullName), ex);

            }
        }
    }
}
