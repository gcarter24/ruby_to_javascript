arr = [1, 2, 3, 3]

def left_equal_right(arr)
  left = 0
  right = arr.reduce(:+)

  arr.each do |i|
    right -= i
    return i if left == right
    left += i
  end
  i
end

p left_equal_right(arr)
