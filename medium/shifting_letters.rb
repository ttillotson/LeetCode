# Input: S = "abc", shifts = [3,5,9]
# Output: "rpl"
# Explanation: 
# We start with "abc".
# After shifting the first 1 letters of S by 3, we have "dbc".
# After shifting the first 2 letters of S by 5, we have "igc".
# After shifting the first 3 letters of S by 9, we have "rpl", the answer.




def shifting_letters(s, shifts)
    alpha = {};
    ("a".."z").each_with_index do |ch, i|
        alpha[ch] = i 
        alpha[i] = ch
    end
    s.chars.map.with_index do |letter, i|
        shift = shifts[i..-1].reduce(:+)
        l_idx = alpha[letter]
        alpha[(l_idx + shift) % 26]
    end.join
end

# Optimizations: 
# Letter Hash for indexing -> faster indexing