#ifdef __APPLE__
    #include "OpenCL/opencl.h"
#else
    #include "CL/cl.h"
#endif

#include "stdio.h"


#define MEM_SIZE 20
#define MAX_SOURCE_SIZE (0x100000)

int main()
{
    cl_device_id device_id = NULL;
    cl_context context = NULL;
    cl_command_queue command_queue = NULL;
    cl_mem bufferA = NULL;
    cl_mem bufferB = NULL;
    cl_mem bufferC = NULL;
    cl_program program = NULL;
    cl_kernel kernel = NULL;
    cl_platform_id platform_id = NULL;
    cl_uint ret_num_devices;
    cl_uint ret_num_platforms;
    cl_int ret;
    
    size_t datasize = MEM_SIZE*sizeof(int);
    
    int A[MEM_SIZE];
    int B[MEM_SIZE];
    int C[MEM_SIZE];
    
    for(int i=0 ; i<MEM_SIZE ; i++)
    {
        A[i] = i;
        B[i] = i;
        C[i] = 0;
    }
    
    FILE *fp;
    char fileName[] = "/Users/Siddhant/Documents/Code/OSX/OpenCL_Test3/main/kernel.cl";
    char *source_str;
    size_t source_size;
    
    /* Load the source code containing the kernel*/
    fp = fopen(fileName, "r");
    if (!fp) {
        fprintf(stderr, "Failed to load kernel.\n");
        exit(1);
    }
    source_str = (char*)malloc(MAX_SOURCE_SIZE);
    source_size = fread(source_str, 1, MAX_SOURCE_SIZE, fp);
    fclose(fp);
    
    /* Get Platform and Device Info */
    ret = clGetPlatformIDs(1, &platform_id, &ret_num_platforms);
    ret = clGetDeviceIDs(platform_id, CL_DEVICE_TYPE_DEFAULT, 1, &device_id, &ret_num_devices);
    
    /* Create OpenCL context */
    context = clCreateContext(NULL, 1, &device_id, NULL, NULL, &ret);
    
    /* Create Command Queue */
    command_queue = clCreateCommandQueue(context, device_id, 0, &ret);
    
    /* Create Memory Buffer */
    bufferA = clCreateBuffer(context, CL_MEM_READ_ONLY,datasize, NULL, &ret);
    bufferB = clCreateBuffer(context, CL_MEM_READ_ONLY,datasize, NULL, &ret);
    bufferC = clCreateBuffer(context, CL_MEM_WRITE_ONLY,datasize, NULL, &ret);
    
    clEnqueueWriteBuffer(command_queue, bufferA, CL_FALSE, 0, datasize, A, 0, NULL, NULL);
    clEnqueueWriteBuffer(command_queue, bufferB, CL_FALSE, 0, datasize, B, 0, NULL, NULL);
    
    /* Create Kernel Program from the source */
    program = clCreateProgramWithSource(context, 1, (const char **)&source_str,(const size_t *)&source_size, &ret);
    
    /* Build Kernel Program */
    ret = clBuildProgram(program, 1, &device_id, NULL, NULL, NULL);
    
    /* Create OpenCL Kernel */
    kernel = clCreateKernel(program, "vecAdd", &ret);
    
    /* Set OpenCL Kernel Parameters */
    ret = clSetKernelArg(kernel, 0, sizeof(cl_mem), &bufferA);
    ret = clSetKernelArg(kernel, 1, sizeof(cl_mem), &bufferB);
    ret = clSetKernelArg(kernel, 2, sizeof(cl_mem), &bufferC);
    
    /* Execute OpenCL Kernel */
    size_t global_item_size = MEM_SIZE;
    size_t local_item_size= 1;
    ret = clEnqueueNDRangeKernel(command_queue, kernel, 1,NULL, &global_item_size, &local_item_size,0,NULL,NULL);
    
    /* Copy results from the memory buffer */
    ret = clEnqueueReadBuffer(command_queue, bufferC, CL_TRUE, 0, datasize, C, 0, NULL, NULL);
    
    /* Display Result */
    for (int i=0; i<MEM_SIZE; i++) {
        printf("%d ",C[i]);
    }
    
    /* Finalization */
    ret = clFlush(command_queue);
    ret = clFinish(command_queue);
    ret = clReleaseKernel(kernel);
    ret = clReleaseProgram(program);
    ret = clReleaseMemObject(bufferA);
    ret = clReleaseMemObject(bufferB);
    ret = clReleaseMemObject(bufferC);
    ret = clReleaseCommandQueue(command_queue);
    ret = clReleaseContext(context);
    
    free(source_str);
    
    return 0;
}
