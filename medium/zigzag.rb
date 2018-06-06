# Time: O(n)
# Space: O(n)
def convert(str, num_rows)
    return str if num_rows == 1 || num_rows >= str.length
    
    zigzagged = Array.new(num_rows, "")
    idx = 0
    step = 1
    str.each_char do |letter|
        zigzagged[idx] += letter
        if idx == 0
            step = 1
        elsif idx == num_rows - 1
            step = -1
        end
        idx += step
    end
    zigzagged.join("")
end