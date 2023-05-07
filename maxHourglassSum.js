function hourglassSum(arr) {
    // Write your code here
    let maxSum = Number.NEGATIVE_INFINITY;
    
    for(let i = 0; i <= arr.length - 3; i++){
        for(let j = 0; j <= arr[i].length - 3; j++){
            let sum = 0;
            sum += arr[i][j] + arr[i][j+1] + arr[i][j+2];
            sum += arr[i+1][j+1]
            sum += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if(sum > maxSum){
                maxSum = sum;
            }
        }
    }
    return maxSum;
}